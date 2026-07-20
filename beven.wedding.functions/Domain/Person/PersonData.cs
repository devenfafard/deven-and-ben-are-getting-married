using beven.wedding.functions.Domain.Definitions;
using beven.wedding.functions.Infrastructure;

namespace beven.wedding.functions.Domain.Person;

public class PersonData
{
    public required string FirstName        { get; init; } = Constants.INVALID_STRING;
    public required string LastName         { get; init; } = Constants.INVALID_STRING;
    public required string GroupAlias       { get; init; } = Constants.INVALID_STRING;
    public required DefconLevel DefconLevel { get; init; } = DefconLevel.Unknown;
    
    public string EmailAddress   { get; init; } = Constants.INVALID_STRING;
    public string MailingAddress { get; init; } = Constants.INVALID_STRING;
    public string PhoneNumber    { get; init; } = Constants.INVALID_STRING;
}