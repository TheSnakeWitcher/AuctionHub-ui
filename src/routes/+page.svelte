<script>
    import { Center, Group, Button, Card } from "@svelteuidev/core";
    import {
        defaultEvmStores,
        connected,
        provider,
        chainId,
        chainData,
        signer,
        signerAddress,
    } from "ethers-svelte";
    import AuctionCard from "../lib/AuctionCard.svelte";

    async function createAuction() {
        if (!$connected) {
            alert("need to autenticate");
        }
        // call server
    }

    const alt = "image not available";
    const auctions = [
        {
            name: "tokenName1",
            image: "[img here]",
            description: "tokenDesc1",
        },
        {
            name: "tokenName2",
            image: "[img here]",
            description: "tokenDesc2",
        },
        {
            name: "tokenName3",
            image: "[img here]",
            description: "tokenDesc3",
        },
        {
            name: "tokenName4",
            image: "[img here]",
            description: "tokenDesc4",
        },
        {
            name: "tokenName5",
            image: "[img here]",
            description: "tokenDesc5",
        },
    ];
</script>

<div class="header">
    <h1>AuctionHub</h1>
    <div class="innerHeader">
        <div class="btnBx">
            <Group>
                <Button on:click={() => createAuction()}
                    >Create a new auction</Button
                >
                {#if !$connected}
                    <Button on:click={() => defaultEvmStores.setProvider()}>
                        Connect with metamask
                    </Button>
                {/if}
            </Group>
        </div>
    </div>
    <br />
</div>

<br />
<div class="auctionsHeader"><h1>Auctions</h1></div>
<br />
<br />

<div class="cardBx">
    <Center>
        <Group>
            {#each auctions as auction}
                <AuctionCard
                    name={auction.name}
                    src={auction.image}
                    {alt}
                    description={auction.description}
                />
            {/each}
        </Group>
    </Center>
</div>

<div class="authorBx">
    <h5>Created by <span> Alex Virelles </span></h5>
</div>
<div class="authorBxEmail">
    <h5>thesnakewitcher@gmail.com</h5>
</div>

<style>
    .header {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header h1 {
        width: 50%;
        margin-left: 25px;
    }

    .btnBx {
        position: relative;
    }

    .innerHeader {
        position: relative;
        display: flex;
        width: 50%;
        justify-content: end;
        margin-right: 25px;
    }

    .auctionsHeader {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 25px;
    }

    .authorBx {
        margin-top: 25px;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .authorBxEmail h5 {
        margin: 0;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .authorHeader {
        font-style: normal;
    }
</style>
