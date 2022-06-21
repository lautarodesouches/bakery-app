import { FlatList, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { products } from "../../constants/data";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {

    const categoryColor = route.params.background;

    const filteredProducts = products.filter(el => el.categoryId === route.params.categoryId)

    const handleSelect = item => (
        navigation.navigate('ProductDetail', {
            product: item,
            productId: item.id,
            name: item.title,
            background: categoryColor
        })
    )

    const renderItem = ({item}) => <ProductItem item={item} handleSelect={handleSelect} categoryColor={categoryColor} />

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