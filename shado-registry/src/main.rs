use miden_client::builder::ClientBuilder;
use miden_client::rpc::Endpoint;

#[tokio::main]
async fn main() {
    println!("🖤 Shado Registry — connecting to Miden testnet...");

    let endpoint = Endpoint::try_from("https://rpc.testnet.miden.io:443").unwrap();

    let mut client = ClientBuilder::new()
        .with_tonic_rpc_client(&endpoint, Some(10_000))
        .with_filesystem_keystore("./keystore")
        .with_sqlite_store("./store.sqlite3")
        .in_debug_mode(false)
        .build()
        .await
        .expect("Failed to build Miden client");

    println!("✅ Connected to Miden testnet!");
    println!("🖤 Shado Registry is live!");
}
