import React from 'react';
import { Row, Col, Card } from 'antd';
import withAuth from '../hocs/withAuth';

const Metrics = () => {
    return <>
        <Row>
            <Col span={18} push={6}>

            </Col>
            <Col span={6} pull={18}>
                <Card title="Métricas">

                </Card>




            </Col>
        </Row>
    </>;
};

export default Metrics;
