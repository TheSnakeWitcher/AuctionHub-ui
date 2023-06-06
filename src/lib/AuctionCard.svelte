<script>
    import {
        Card,
        Image,
        Text,
        Group,
        Button,
        Center,
        Badge,
    } from "@svelteuidev/core";
    export let name;
    export let description;
    export let src;
    export let alt;
</script>

<div class="cardBx">
    <Card shadow="sm" padding="lg">
        <!-- <Group position="apart"> -->
        <div class="bx nameBx">
            <Center>
                <Text weight={300}>{name}</Text>
            </Center>
        </div>

        <div class="bx">
            <Center>
                <Card.Section first padding="lg">
                    <Image {src} height={100} {alt} />
                </Card.Section>
            </Center>
        </div>

        <div class="bx">
            <Center>
                <Text size="sm">{description}</Text>
            </Center>
        </div>

        <div class="bx">
            <Center>
                <Button variant="light" color="blue">Bid</Button>
            </Center>
        </div>
    </Card>
</div>

<style>
    .cardBx {
        border-radius: 5px;
        position: relative;
        width: 200px;
    }

    .bx {
        margin-top: 10px;
        width: 100%;
        position: relative;
    }

    .nameBx {
        margin-top: 0;
        padding: 10px;
        border-bottom: lightblue solid 3px;
        margin: 0 auto;
        right: 10px;
    }

    .alignRight {
        display: flex;
        justify-content: end;
    }
</style>
