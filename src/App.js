import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Slider from './Pages/Slider';
import Content from './Pages/Content';
import Box from './Pages/Box';
import Blog from './Pages/Blog';
import React, { Component } from 'react';
import FormExample from './Pages/FormExample';
import Modalka from './Pages/Modalka';
export default class App extends Component {
  render() {
    return (
    <>
    <Header/>
    <Slider/>
    <Content/>
    <Box/>
    <Blog/>
    <Modalka/>
    <FormExample/>
    </>
    )
  }
}

