import React from 'react';
import { Image } from 'react-native';


const defaultProfile = require('../../assets/defaultProfile.png');
const defaultProfileUri = Image.resolveAssetSource(defaultProfile).uri;

export default defaultProfileUri;