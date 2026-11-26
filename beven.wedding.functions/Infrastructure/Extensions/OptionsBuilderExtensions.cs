using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace beven.wedding.functions.Infrastructure.Extensions;

public static class OptionsBuilderExtensions
{
    public static OptionsBuilder<TOptions> ValidateFluentlyWithThrowOnFail<TOptions>(this OptionsBuilder<TOptions> builder)
    where TOptions : class
    {
        builder.Validate<IValidator<TOptions>>(static (options, validator) =>
        {
            var result = validator.Validate(options);

            if (result.IsValid)
            {
                return true; 
            }

            var errors = result.Errors.Select(static error => error.ErrorMessage);

            throw new OptionsValidationException(typeof(TOptions).Name, typeof(TOptions), errors);
        });

        return builder;
    }

    public static void AddOptionsAsSingleton<TOptions>(this OptionsBuilder<TOptions> builder) where TOptions : class
    {
        builder.Services.AddSingleton(serviceContainer => 
            serviceContainer.GetRequiredService<IOptions<TOptions>>().Value);
    }
}