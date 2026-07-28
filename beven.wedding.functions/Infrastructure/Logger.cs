using System.Reflection;
using Microsoft.Extensions.Configuration;
using Serilog;

namespace beven.wedding.functions.Infrastructure;

public static class Logger
{
   private const string ConfigurationFile = "appsettings.Serilog";
   private const bool   Required          = false;

   public static LoggerConfiguration Configure()
   {
      var configuration = Constants.IsProduction
         ? new ConfigurationBuilder()
            .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? Constants.INVALID_STRING)
            .AddJsonFile($"{ConfigurationFile}.json", Required)
            .Build()
         : new ConfigurationBuilder()
            .SetBasePath(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? Constants.INVALID_STRING)
            .AddJsonFile($"{ConfigurationFile}.json", Required)
            .AddJsonFile($"{ConfigurationFile}.{Constants.CurrentEnvironment}.json", Required)
            .Build();
      
      return new LoggerConfiguration().ReadFrom.Configuration(configuration);
   }
}