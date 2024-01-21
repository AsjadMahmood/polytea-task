import { NetworkStatus, useQuery } from "@apollo/client";
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Bar } from '../components/charts/barChart';
import { Pie } from '../components/charts/pieChart';
import { Error } from '../components/ui/error';
import { Loading } from '../components/ui/loading';
import { PRODUCT_LIST_QUERY, RANDOM_PRODUCTS_QUERY } from '../graphQl/queries';
import { eTabs } from '../models/basic.model';

export function ProductTrends()
{

    const { loading: loadingProducts, error: errorProducts, data: productsData } = useQuery(PRODUCT_LIST_QUERY);
    const
        {
            loading: loadingRandomProducts,
            error: errorRandomProducts,
            data: randomProductsData,
            refetch: refetchRandomProducts, networkStatus
        } = useQuery(RANDOM_PRODUCTS_QUERY,
            {
                notifyOnNetworkStatusChange: true,
            });

    const [tab, setTab] = useState(eTabs.Bar);


    /** Sets new tab and re Fetches data for 'Pie' tab */
    const onSelectTab = (newTab: eTabs) =>
    {
        if (newTab === eTabs.Pie)
            refetchRandomProducts();

        setTab(newTab)
    }


    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={tab}
            className="mb-3"
            onSelect={(k) => onSelectTab(k! as eTabs)}
        >
            <Tab eventKey="Bar" title="Bar">
                {
                    // in case of refetching we also show loading 
                    (networkStatus === NetworkStatus.refetch || loadingProducts) ? (
                        <Loading />
                    ) :
                        errorProducts ? (
                            <Error></Error>
                        ) : (
                            <div style={{ width: 800, height: 1000 }}>
                                <Bar data={productsData.products ? productsData.products : []}></Bar>
                            </div>
                        )
                }
            </Tab>
            <Tab eventKey="Pie" title="Pie">
                {loadingRandomProducts ? (
                    <Loading />
                ) : errorRandomProducts ? (
                    <Error></Error>
                ) : (
                    <div style={{ width: 800, height: 1000 }}>
                        <Pie data={randomProductsData.randomProducts ? randomProductsData.randomProducts : []}></Pie>
                    </div>
                )}
            </Tab>
        </Tabs>
    );
}