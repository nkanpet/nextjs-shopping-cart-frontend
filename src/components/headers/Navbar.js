import React from 'react';
import {Navbar, Button, Link, Input, Text, Grid} from '@nextui-org/react';
import NextLink from 'next/link';

import styles from '@/styles/MainLayout.module.scss';
import {useRouter} from 'next/router';

const HeaderNavbar = ({brandName = '', menus = []}) => {
  const router = useRouter();

  return (
    <Navbar isBordered="false" variant="sticky" className={styles.navbar}>
      <Navbar.Toggle showIn="sm" />
      <Grid.Container className={styles.gridNavbar}>
        <Grid xs>
          <Navbar.Brand className={styles.navbarBrand}>
            <Text b color="inherit">
              {brandName}
            </Text>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="success"
            variant="underline"
            className={styles.navbarContent}>
            {menus.map(item => (
              <Navbar.Item key={`menu_${item.id}`}>
                <NextLink href={{pathname: '/', query: {category_id: item.id}}}>{item.name?.toUpperCase()}</NextLink>
              </Navbar.Item>
            ))}
          </Navbar.Content>
        </Grid>
        <Grid css={{flex: 1, display: 'flex'}} justify="center">
          <Input clearable contentLeftStyling={false} placeholder="Search..." fullWidth />
        </Grid>
        <Grid xs justify="flex-end">
          <Navbar.Content
            enableCursorHighlight
            activeColor="success"
            variant="underline"
            className={styles.navbarContent}>
            <Navbar.Link href="#">MY BASKET</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content className={styles.navbarRegister}>
            <Navbar.Item color="inherit">
              <NextLink href="/auth/login">Login</NextLink>
            </Navbar.Item>
            <Navbar.Item>
              <Button auto flat className={styles.buttonSignUp} onClick={() => router.push('/register')}>
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Grid>
      </Grid.Container>
      <Navbar.Collapse>
        {menus.map(item => (
          <Navbar.CollapseItem key={`menu_mobile_${item.id}`}>
            <NextLink href={{pathname: '/', query: {category_id: item.id}}} legacyBehavior>
              <Link
                color="inherit"
                css={{
                  minWidth: '100%',
                }}>
                {item.name?.toUpperCase()}
              </Link>
            </NextLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default React.memo(HeaderNavbar);
