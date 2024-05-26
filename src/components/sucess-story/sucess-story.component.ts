import { Component } from '@angular/core';
interface SuccessStory {
  name: string;
  imageUrl: string;
  story: string;
}
@Component({
  selector: 'app-sucess-story',
  templateUrl: './sucess-story.component.html',
  styleUrls: ['./sucess-story.component.css']
})
export class SucessStoryComponent {
  successStories:SuccessStory[]=  [
    {
      name: 'Oscar',
      imageUrl: '../../assets/oscar.jpg',
      story: 'Meet Oscar, the lovable tabby from Marsa. When his family had to move away, Sarah welcomed him into her home with open arms. Now, Oscar enjoys a life of love and companionship with Sarah, his new best friend'
    },
    {
     
      name: 'Bella',
      imageUrl: 'https://www.catcafelounge.com/uploads/8/0/8/6/80861148/published/catcafelounge-2020feb-26-byericadanger.jpg?1658883948',
      story: 'Bella found her forever home with the Smith family and is now enjoying a life full of love and play.'
    },
    {
      name: 'Max',
      imageUrl: 'https://petprosservices.com/wp-content/uploads/2017/01/picture008-e1484071226607.jpg',
      story: 'Max was adopted by a loving couple who adore his playful and curious nature.'
    },
    {
      name: 'Luna',
      imageUrl: 'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/4/25/take-me-home-tuesday--symmetra-1-6370845-1682451971164.jpg',
      story: 'Luna was adopted by the Johnsons, who love her affectionate personality and playful antics.'
    },
    {
      name: 'Charlie',
      imageUrl: 'https://www.safehavenforcats.org/images/pet_images/14974-0.jpg',
      story: 'Charlie was adopted by a family who appreciates his gentle and calm demeanor. He now enjoys lounging in sunny spots around the house.'
    },
    {
      name: 'Oliver',
      imageUrl: 'https://www.rover.com/blog/wp-content/uploads/iStock-1351674664-e1658942445108.jpg',
      story: 'Oliver was adopted by a young professional who loves his energetic and playful spirit. They often go on adventures together.'
    },
    {
      name: 'Molly',
      imageUrl: 'https://www.ochd.org/wp-content/uploads/2023/06/354255108_641665618004536_6733841400963987497_n-1200x900.jpg',
      story: 'Molly was adopted by a retired couple who enjoy her loving and calm nature. She has brought a lot of joy and companionship to their home.'
    },
    {
      name: 'Simba',
      imageUrl: 'https://allaboutcatsrescue.org/wp-content/uploads/2023/07/Cat-Maggie-July-2023-2-820x490.jpg',
      story: 'Simba was adopted by a family with kids who love his playful and friendly nature. He quickly became a beloved member of the family.'
    },
    {
      name: 'Chloe',
      imageUrl: 'https://media-be.chewy.com/wp-content/uploads/2020/08/04213058/portrait-of-beautiful-and-fluffy-tri-colored-tabby-cat-at-home-light-picture-id1198100351-1024x548.jpg',
      story: 'Chloe found her forever home with a single parent who adores her sweet and affectionate personality. They share a special bond.'
    }
  ];

}
