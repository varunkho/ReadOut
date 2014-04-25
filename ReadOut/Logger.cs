using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;

namespace ReadOut
{
    public class Logger
    {

        public enum MediaType { Console, FileSystem, Stream, TextWriter };

        public const int RECOMMENDED_SIZE_IN_KB = 512;

                #region props
        /// <summary>
        /// Gets/sets the output device which the logger write to.
        /// </summary>
        public MediaType OutputMedia { get; private set; }

        /// <summary>
        /// File to be used to write log messages if output media is set to FileSystem.
        /// </summary>
        public string LogFile { get; private set; }

        public Stream LogStream { get; private set; }

        public TextWriter LogWriter { get; private set; }

        public bool SuppressErrors { get; set; }

        public int MaxLogFileSizeInKB { get; private set; }

        public string LogDirectory { get; private set; }

        public static string AppRoot
        {
            get
            {
                return AppDomain.CurrentDomain.BaseDirectory;
            }
        }
        #endregion

        #region Constructors
        /// <summary>
        /// Creates a logger that may write (if mediaType is FileSystem) to default app.log file.
        /// </summary>
        /// <param name="type"></param>
        public Logger(MediaType type)
            : this(type, Path.Combine(AppRoot, "app.log"), true)
        { }

        /// <summary>
        /// logFile can be pathless in which case assembly relative file will be created.
        /// </summary>
        /// <param name="type"></param>
        /// <param name="logFile"></param>
        public Logger(MediaType type, string logFile)
            : this(type, logFile, true)
        { }

        public Logger(MediaType type, string logFile, bool suppressErrors)
        {
            if (type == MediaType.FileSystem)
            {
                ArgumentValidator.ThrowIfNullOrEmpty(logFile, "logFile");
                if (Path.IsPathRooted(logFile))
                    this.LogFile = logFile;
                else
                    this.LogFile = Path.Combine(AppRoot, logFile);
            }
            this.OutputMedia = type;
            this.SuppressErrors = suppressErrors;
        }

        public Logger(string logDir, int maxLogFileSizeInKB)
        {
            ArgumentValidator.ThrowIfNullOrEmpty(logDir, "logDir");

            logDir = Path.IsPathRooted(logDir)
                ? logDir
                : Path.Combine(AppRoot, logDir);

            if (!Directory.Exists(logDir))
                Directory.CreateDirectory(logDir);

            this.LogDirectory = logDir;
            this.LogFile = Path.Combine(logDir, UniqueLogFileName);
            this.MaxLogFileSizeInKB = maxLogFileSizeInKB;
            this.OutputMedia = MediaType.FileSystem;
            this.SuppressErrors = true;
        }

        public Logger(Stream logStream)
        {
            ArgumentValidator.ThrowIfNull(logStream, "logStream");

            this.OutputMedia = MediaType.Stream;
            this.LogStream = logStream;
            this.SuppressErrors = true;
        }

        public Logger(TextWriter logWriter)
        {
            ArgumentValidator.ThrowIfNull(logWriter, "logWriter");

            this.OutputMedia = MediaType.TextWriter;
            this.LogWriter = logWriter;
            this.SuppressErrors = true;
        }
        #endregion

        #region Private Utility Methods
        private string UniqueLogFileName
        {
            get
            {
                // A unique file name is obtained via current time.
                                return string.Format("{0:yyyy-MM-dd H-mm-ss.fff}.log", DateTime.Now);
            }
        }

        private void InsureLogFile()
        {
            try
            {
                if (!File.Exists(LogFile))
                    return;

                if (new FileInfo(LogFile).Length / 1024 > MaxLogFileSizeInKB)
                {
                    string fname = this.UniqueLogFileName;
                    LogFile = Path.Combine(LogDirectory, fname);

                }
            }
            catch (Exception)
            {
            }
        }
        #endregion

        #region WriteLine Methods
        public void WriteLine(string text)
        {
            WriteX("{0}\r\n\r\n", text);
        }

        public void WriteLine(string format, params object[] args)
        {
            WriteX(string.Format("{0}\r\n", format), args);
        }

        public void WriteLineWithTimeStamp(string text)
        {
            WriteX("on {0}\r\n{1}\r\n\r\n", DateTime.Now, text);
        }

        public void WriteLineWithTimeStamp(string format, params object[] args)
        {
            WriteX(string.Format("on {0}\r\n{1}\r\n\r\n", DateTime.Now, format), args);
        }
        #endregion

        #region Write Methods
        public void Write(Exception ex)
        {
            WriteX("\r\nAn error occurred {{{0}}}. The detailed stack trace is below.\r\n{1}\r\n", ex.Message, ex.ToString());
        }

        public void Write(Exception ex, string customText)
        {
            WriteX("\r\nAn error occurred {{{0}}}.\r\nCustom Message: {1}.\r\n\r\nThe detailed stack trace is below.\r\n{2}\r\n", ex.Message, customText, ex.ToString());
        }

        public void Write(string text)
        {
            WriteX(text);
        }

        public void WriteWithTimeStamp(string text)
        {
            WriteX("on {0}\r\n{1}", DateTime.Now, text);
        }


        public void WriteWithTimeStamp(Exception ex)
        {
            WriteX("\r\n on {0}\r\nAn error occurred {{{1}}}.\r\n\r\nThe detailed stack trace is below.\r\n{2}\r\n", DateTime.Now, ex.Message, ex.ToString());
        }

        public void WriteWithTimeStamp(Exception ex, string customText)
        {
            WriteX("\r\n on {0}\r\nAn error occurred {{{1}}}.\r\nCustom Message: {2}.\r\n\r\nThe detailed stack trace is below.\r\n{3}\r\n", DateTime.Now, ex.Message, customText, ex.ToString());
        }

        public void WriteWithTimeStamp(string format, params object[] args)
        {
            WriteX(string.Format("on {0}\r\n{1}", DateTime.Now, format), args);
        }

        public void Write(string format, params object[] args)
        {
            WriteX(format, args);
        }

        private void WriteX(string format, params object[] args)
        {
            try
            {
                lock (this)
                {
                    string fText;
                    if (args.Length > 0)
                        fText = string.Format(format, args);
                    else
                        fText = format;

                    switch (OutputMedia)
                    {
                        case MediaType.Console:
                            Console.Write(fText);
                            break;
                        case MediaType.FileSystem:
                            if (MaxLogFileSizeInKB > 0)
                                InsureLogFile();

                            File.AppendAllText(LogFile, fText);
                            break;
                        case MediaType.Stream:
                            var bytes = new System.Text.ASCIIEncoding().GetBytes(fText);
                            LogStream.Write(bytes, 0, bytes.Length);
                            break;
                        case MediaType.TextWriter:
                            LogWriter.Write(fText);
                            break;
                    }
                }
            }
            catch (Exception)
            {
                //if (!SuppressErrors)
                //throw;
            }
        }
        #endregion

    }    
}
