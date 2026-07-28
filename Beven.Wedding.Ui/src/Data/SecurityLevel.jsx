const SecurityLevel =
{
    level: 0,
    GetLevel()
    {
        return this.level;
    },
    AddLevel()
    {
        this.level++;
    }
}

export default SecurityLevel;