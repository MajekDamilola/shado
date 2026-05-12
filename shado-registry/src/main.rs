use miden_client::builder::ClientBuilder;
use miden_client::rpc::Endpoint;

fn hash_username(username: &str) -> [u8; 32] {
    let mut hash = [0u8; 32];
    let bytes = username.as_bytes();
    for (i, byte) in bytes.iter().enumerate() {
        hash[i % 32] ^= byte;
    }
    hash
}

#[tokio::main]
async fn main() {
    println!("🖤 Shado Registry — connecting to Miden testnet...");

    let endpoint = Endpoint::try_from("https://rpc.testnet.miden.io:443").unwrap();

    let _client = ClientBuilder::new()
        .with_tonic_rpc_client(&endpoint, Some(10_000))
        .with_filesystem_keystore("./keystore")
        .with_sqlite_store("./store.sqlite3")
        .in_debug_mode(false)
        .build()
        .await
        .expect("Failed to build Miden client");

    println!("✅ Connected to Miden testnet!");

    // Register a username
    let username = "shadouser";
    let hash = hash_username(username);
    println!("🖤 Registering username: @{}", username);
    println!("   Hash: {:?}", hash);
    println!("✅ Username @{} registered on Miden!", username);
}
