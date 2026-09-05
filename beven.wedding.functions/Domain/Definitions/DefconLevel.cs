namespace beven.wedding.functions.Domain.Definitions;

/// <summary>
/// Represents the level of chill someone has (a.k.a. what level of access a person has to content on the site)
/// </summary>
public enum DefconLevel
{
    Unknown = 0,
    
    FleaBottom,     // least restrictive
    Sept,
    SmallFolk,
    Court,
    SmallCouncil    // Most restrictive
}