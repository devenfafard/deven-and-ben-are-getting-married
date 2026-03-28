using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace beven.wedding.functions.Functions.Safeguard;

public static class SafeguardServices
{
    private static IServiceCollection   _services       = null!;
    private static IConfiguration       _configuration  = null!;

    public static IServiceCollection AddSafeguardServices(this IServiceCollection services,
        IConfiguration configuration)
    {
        _services = services;
        _configuration = configuration;
        
        AddValidators();
        
        return services;
    }

    private static void AddValidators()
    {
        _services.AddTransient<SafeguardDtoValidator>();
    }
}