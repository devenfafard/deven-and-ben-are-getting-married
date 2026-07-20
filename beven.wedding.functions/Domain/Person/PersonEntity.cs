using System.Text.Json.Serialization;
using beven.wedding.functions.Domain.Definitions;
using beven.wedding.functions.Infrastructure;
using beven.wedding.functions.Infrastructure.Storage;

namespace beven.wedding.functions.Domain.Person;

public record PersonEntity: EntityBase
{
    [JsonConstructor]
    public PersonEntity()
    {
        // Required for deserialization.
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="groupAlias">String representation of someone's group alias. Each alias may have one or more people
    /// assigned to it.</param>
    /// <param name="firstName">String representation of someone's first name.</param>
    public PersonEntity(string groupAlias, string firstName)
    {
        PartitionKey = groupAlias;
        RowKey       = firstName;
    }

    public required string FirstName  { get; init; } = Constants.INVALID_STRING;
    public required string LastName   { get; init; } = Constants.INVALID_STRING;
    public required string GroupAlias { get; init; } = Constants.INVALID_STRING;
    public required string DefconLevel { get; init; } = Constants.INVALID_STRING;
    
    // Optional fields
    public string EmailAddress   { get; init; } = Constants.INVALID_STRING;
    public string MailingAddress { get; init; } = Constants.INVALID_STRING;
    public string PhoneNumber    { get; init; } = Constants.INVALID_STRING;
}