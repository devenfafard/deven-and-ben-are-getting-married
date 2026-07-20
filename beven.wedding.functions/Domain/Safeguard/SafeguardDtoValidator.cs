using FluentValidation;
using JetBrains.Annotations;

namespace beven.wedding.functions.Domain.Safeguard;

[UsedImplicitly]
public class SafeguardDtoValidator: AbstractValidator<SafeguardDto>
{
    /*
     * '^' asserts position at start of a string
     * `[a-zA-Z]+` represents one or more lowercase/uppercase characters
     * `$` asserts end of string
     */
    private const string OnlyAlphanumericCharactersRegex = "^[a-zA-Z]+$";
    
    public SafeguardDtoValidator()
    {
        RuleFor(static s => s.Data)
            .NotEmpty().WithMessage("Safeguard cannot be a empty string")
            .Matches(OnlyAlphanumericCharactersRegex).WithMessage("Safeguard may only contain alphanumeric characters");
    }
}