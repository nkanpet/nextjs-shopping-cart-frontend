import React from 'react';
import {Grid, Card, Text, Row, Button, Image} from '@nextui-org/react';

import styles from '@/styles/MainLayout.module.scss';

const ProductList = ({data = [], onAddToCart = () => {}}) => {
  const mockItem = item => {
    return (
      <Card className={styles.cardProductContainer} isHoverable>
        <Card.Header>
          <Image width={320} height={180} src={item.image} alt="Default Image" autoResize />
        </Card.Header>
        <Card.Body>
          <Text className={styles.cardProductText}>{item.name}</Text>
        </Card.Body>
        <Card.Footer>
          <Row justify="center">
            <Button className={styles.cardButton} onPress={() => onAddToCart(item)}>
              ADD TO BASKET
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <Grid.Container gap={2}>
      {data?.map(item => {
        return (
          <Grid xs={12} sm={3} key={`product_${item.id}`}>
            {mockItem(item)}
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default React.memo(ProductList);
