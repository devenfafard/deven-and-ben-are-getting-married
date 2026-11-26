using beven.wedding.functions.Infrastructure;
using FluentValidation;
using JetBrains.Annotations;

namespace beven.wedding.functions.Domain.Safeguard;

[UsedImplicitly]
public class SafeguardDtoValidator: AbstractValidator<SafeguardDto>
{
    public SafeguardDtoValidator()
    {
        RuleFor(static s => s.Data)
            .NotEmpty()
            .WithMessage("Safeguard cannot be a empty string")
            .Matches(Constants.OnlyAlphanumericCharactersRegex)
            .WithMessage("Safeguard may only contain alphanumeric characters");
    }
}