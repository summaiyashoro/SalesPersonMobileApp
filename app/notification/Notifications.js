import React from 'react';
import { FlatList } from 'react-native';

import NotificationItem from "./NotificationItem";
import Separator from "../components/Separator";

const notification = [
  {
    id: 1,
    title: "Raza Ali Baloch",
    subTitle: "We have found suspicious activity from your account",
    profileImage: "",
    timeofArrival: "2 mins"
  },
  {
    id: 2,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 3,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 4,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 5,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 6,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 7,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 8,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 9,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 10,
    title: "Raja Rohit Karmanmvcbmx xcmnvxnmv xcmvxnv xcmvxcnm ni",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.Please coordinate with your nearest customer.He has launched complaint aganist us.v",
    profileImage: "",
    timeofArrival: "1 hour"
  },
  {
    id: 11,
    title: "Raja Rohit Karmani",
    subTitle: "Please coordinate with your nearest customer.He has launched complaint aganist us.",
    profileImage: "",
    timeofArrival: "1 hour"
  },

]




function Notifications({navigation}) {
  return (
    <FlatList
      data={notification}
      keyExtractor={notification => notification.id.toString()}
      renderItem={({ item }) => (
        <NotificationItem
          title={item.title}
          subTitle={item.subTitle}
          profileImage={item.profileImage}
          timeofArrival={item.timeofArrival}
          navigation={navigation}
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  );
}



export default Notifications;