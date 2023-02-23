import {bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch],
  );
}

export const sleep = (duration = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
};

export const numberFormat = (number, float = 2) =>
  (number || 0)
    .toFixed(float)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
