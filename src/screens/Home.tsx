import { Button, Layout } from "@ui-kitten/components/ui";

export function Home({ navigation }: any) {
    const navigateProfile = () => {
        navigation.navigate('Details');
    }

    return (
        <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button onPress={navigateProfile}>Go to details</Button>
        </Layout>
    )
}