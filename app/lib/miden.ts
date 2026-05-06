let client: any = null;

export async function getMidenClient() {
  if (client) return client;

  const { WebClient } = await import("@demox-labs/miden-sdk");
  client = await WebClient.createClient();
  return client;
}

export async function createWallet() {
  const { AccountStorageMode } = await import("@demox-labs/miden-sdk");
  const midenClient = await getMidenClient();
  const account = await midenClient.newWallet(
    AccountStorageMode.private(),
    true
  );
  return {
    id: account.id().toString(),
    isPublic: account.isPublic(),
  };
}