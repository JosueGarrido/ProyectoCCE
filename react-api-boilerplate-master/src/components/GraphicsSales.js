import React from 'react';
import {Select, Tabs, Typography} from 'antd';
import {Line} from '@ant-design/charts';
import {useSalesList} from "../data/useSales";
import {Graphic} from "./Graphic";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option, OptGroup } = Select;
const data2= '';
var first;
var end;
var ventaBruta=0;
var numberSales=0;
function callback(key) {
    console.log(key);
}

function HandleChange(value) {
   /* if (value == 'date1') {
        var pad = function (num) {
            return ('00' + num).slice(-2)
        };
        first = new Date();
        first = first.getUTCFullYear() + '-' +
            pad(first.getUTCMonth() + 1) + '-' +
            pad(first.getUTCDate()) + ' ' + '00:00:00';
        end = new Date();
        end=end.getUTCFullYear() + '-' +
            pad(end.getUTCMonth() + 1) + '-' +
            pad(end.getUTCDate()) + ' ' + '23:59:59';
        console.log('del primero',first+' '+end);
        //const datesales=useDateSalesFilter(first,end);
        return first,end;
    }*/
    return Graphic(value);
}
const data = [
    { year: '1991', value1: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
];



const config = {
    data2,
    xField: 'year',
    yField: 'value',
    point: {
        size: 5,
        shape: 'diamond',
    },
    label: {
        style: {
            fill: '#c32a98',
        },
    },
};

const config2 = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
        size: 5,
        shape: 'diamond',
    },
    label: {
        style: {
            fill: '#000000',
        },
    },
};


const GraphicsSales = (props) => {
   /* var pad = function (num) {
        return ('00' + num).slice(-2)
    };
    first = new Date();
    first = first.getUTCFullYear() + '-' +
        pad(first.getUTCMonth() + 1) + '-' +
        pad(first.getUTCDate()) + ' ' + '00:00:00';
    end = new Date();
    end=end.getUTCFullYear() + '-' +
        pad(end.getUTCMonth() + 1) + '-' +
        pad(end.getUTCDate()) + ' ' + '23:59:59';
    console.log('del primero',first+' '+end);
    const datesales=useDateSalesFilter(first,end);*/
    const { sales, isLoading, isError } = useSalesList();

    //console.log('rango',datesales);
    console.log('sales',sales);
        if (isLoading) {
            return <h2>Cargando...</h2>;
        }
    for (var i=0; i < sales.length; i++){
        ventaBruta = ventaBruta + (sales[i].product.price * sales[i].product.sales)
        console.log('result '+i,ventaBruta);
    }
    for(var j=0; j < sales.length; j++){
        numberSales = numberSales + sales[j].product.sales
    }
    console.log('venta bruta ', ventaBruta);



return(
    <>
        <h2>Periodo:</h2>
        <Select placeholder="Seleccionar" style={{ width: 200 }} onChange={HandleChange}>
            <Option value="date1" >Hoy</Option>
            <Option value="date2">Últimos 7 días</Option>
            <Option value="date3">Últimos 15 días</Option>
            <Option value="date4">Últimos 30 días</Option>
        </Select>
        <hr/>
        <br/>
        <Tabs onChange={callback} type="card">
            <TabPane tab={
                <>
                    <Text><b>Ventas Brutas</b> </Text>
                    <br/>
                    <Title level={4}><b>U$S</b> {ventaBruta}</Title>
                </>
            } key="1">
                <Line style={{height: 400}} {...config} />
            </TabPane>

            <TabPane tab={
                <>
                    <Text><b>Cantidad de Ventas</b></Text>
                    <br/>
                    <Title level={4} style={{textAlign:"center"}}>{sales.length}</Title>
                </>
            } key="2">
                <Line style={{height: 400}} {...config2} />
            </TabPane>

            <TabPane tab={
                <>
                    <Text><b>Unidades Vendidas</b></Text>
                    <br/>
                    <Title level={4} style={{textAlign:"center"}}>{numberSales}</Title>
                </>
            } key="3">
                <Line style={{height: 400}} {...config} />
            </TabPane>

            <TabPane tab={
                <>
                    <Text>Precio promedio</Text>
                    <br/>
                    <Title level={4}> U$S 0</Title>
                </>
            } key="4">
                <Line style={{height: 400}} {...config} />
            </TabPane>
        </Tabs>



    </>
);

}

export default  GraphicsSales;

