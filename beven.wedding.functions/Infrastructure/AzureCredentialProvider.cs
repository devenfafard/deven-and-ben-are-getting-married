using Azure.Identity;
using Microsoft.Extensions.Hosting;

namespace beven.wedding.functions.Infrastructure;
/*
public static class AzureCredentialProvider
{
    private static ChainedTokenCredential? _credential;

    public static ChainedTokenCredential GetAzureCredential(this HostBuilderContext context)
    {
        return GetCredential(context.HostingEnvironment.IsDevelopment());
    }

    private static ChainedTokenCredential GetCredential(bool isDevelopment)
    {
        if (_credential is not null) return _credential;

        _credential = isDevelopment
            ? new ChainedTokenCredential(new AzureCliCredential(), new VisualStudioCredential())
            : new ChainedTokenCredential(new ManagedIdentityCredential());
    }
}*/