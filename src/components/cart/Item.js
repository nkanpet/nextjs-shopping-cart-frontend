import {Card, Grid, Text, Image, Spacer, Row, Button, Input} from '@nextui-org/react';
import React from 'react';

const CartItem = ({item, onDecrease = () => {}, onIncrease = () => {}, onDelete = () => {}}) => {
  return (
    <Card>
      <Card.Body>
        <Grid.Container>
          <Grid>
            <Image src={item?.product?.image} />
          </Grid>
          <Spacer />
          <Grid>
            <Text b>{item?.product?.name}</Text>
            <Row>
              <Button flat auto onPress={() => onDecrease(item)} disabled={item.quantity <= 1}>
                -
              </Button>
              <Input width={50} value={item?.quantity} readOnly />
              <Button flat auto onPress={() => onIncrease(item)}>
                +
              </Button>
            </Row>
            <Button color="error" onPress={() => onDelete(item)}>
              Delete
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default React.memo(CartItem);
