import Layout from "./layout";

const withLayout = (Component) => (props) =>(
    <Layout>
        <Component {...props}/>
    </Layout>
)

export default withLayout;