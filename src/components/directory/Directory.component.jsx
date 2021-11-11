
import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/Menu-item.components';

class Directory extends React.Component {
   constructor() {
      super();

      this.state = {
         sections: [
            {
             title: 'chinese',
              // title: 'hats',
             imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'pizza',
              imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'Dessert',
              imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/raspberry-and-pistachio-semifreddo-jpg-1589489725.jpg?crop=1xw:1xh;center,top&resize=980:*',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'chinese',
               // title: 'hats',
              imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
               // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
               id: 1,
               linkUrl: 'shop/hats'
             },
             {
               title: 'pizza',
               imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
               // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
               id: 2,
               linkUrl: 'shop/jackets'
             },
             {
              title: 'pizza',
              imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'pizza',
              imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            
          ]
      }
   }

   render() {
      return (
         <div className='directory-menu'>
           {this.state.sections.map(({ id, ...otherSectionProps }) => (
             <MenuItem key={id} {...otherSectionProps} />
           ))}
         </div>
       );
   }
}

export default Directory;
