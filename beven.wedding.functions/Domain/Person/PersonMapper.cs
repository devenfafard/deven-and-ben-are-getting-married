using beven.wedding.functions.Domain.Definitions;

namespace beven.wedding.functions.Domain.Person;

public class PersonMapper
{
    public PersonData MapEntityToData(PersonEntity entity) =>
    new()
    {
        FirstName = entity.FirstName,
        LastName = entity.LastName,
        GroupAlias = entity.GroupAlias,
        DefconLevel = Enum.TryParse<DefconLevel>(entity.DefconLevel, out var level) ? level : DefconLevel.Unknown 
    };
}