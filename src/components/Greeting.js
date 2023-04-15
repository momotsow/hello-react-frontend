import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/slices/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>{greeting}</div>
  );
}

export default Greeting;
