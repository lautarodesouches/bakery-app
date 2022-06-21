import { FlatList, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { products } from "../../constants/data";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {

    const filteredProducts = products.filter(el => el.categoryId === route.params.categoryId)

    const handleSelect = item => (
        navigation.navigate('ProductDetail', {
            productId: item.id,
            name: item.title,
        })
    )

    const renderItem = ({item}) => <ProductItem item={item} handleSelect={handleSelect} categoryColor={route.params.background} />

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}
            />
        </View>
    );
}

export default Products;