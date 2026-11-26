using beven.wedding.functions.Infrastructure.Email.Options;
using beven.wedding.functions.Infrastructure.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace beven.wedding.functions.Infrastructure.Email;

public static class EmailServices
{
    private static IServiceCollection _services = null!;
    
    public static IServiceCollection AddEmailServices(this IServiceCollection services,
                                                      IConfiguration configuration)
    {
        _services = services;
     
        _services.AddTransient<EmailOptionsValidator>()
            .AddTransient<EmailContentMapper>();
        
        AddOptions(configuration);
        
        _services.AddSingleton<EmailOperationClient>();

        return _services;
    }

    private static void AddOptions(IConfiguration configuration)
    {
        _services.AddOptionsWithValidateOnStart<EmailOptions>()
            .Bind(configuration.GetSection(nameof(EmailOptions)))
            .ValidateFluentlyWithThrowOnFail()
            .AddOptionsAsSingleton();
    }
}