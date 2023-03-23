import { Layout } from './components/layout';
import { products } from './mocks/products';
import { Card } from './components/card';
import { Grid } from './components/grid';

const App = () => {
    return (
        <Layout>
            {products && (
                <Grid>
                    {products.map((product) => (
                        <Card {...product} />
                    ))}
                </Grid>
            )}
        </Layout>
    );
};

export default App;
