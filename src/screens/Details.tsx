import { Layout, Text, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { CaretLeft } from 'phosphor-react-native';

export function Details({ navigation }: any) {
    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={<CaretLeft />} onPress={navigateBack} />
    );

    return (
        <>
            <TopNavigation title={"Details"} alignment='center' accessoryLeft={BackAction} />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Details</Text>
            </Layout>
        </>
    )
}