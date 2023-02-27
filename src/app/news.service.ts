import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news:News[]=[
    new News("Understanding your photography brand","https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1676072893301_1676072893301.jpeg","For any photography logo, there are two sides to your brand that you’ll need to consider. Your clients remember you both by your work and what it’s like to work with you. So, while your photography logo should sell your photography style, it also needs to sell your style of doing business. ", new Date(2002,5,10)),
      new News("Breaking news highlights","https://static.toiimg.com/thumb/imgsize-37494,msid-97672613,width-400,resizemode-4/97672613.jpg","Breaking news highlights, February 11: Get latest news, breaking news, latest updates, live news, top headlines, breaking business news and top news of the hour.", new Date()),
  ]
  
  getAllNews():News[]{
  return this.news;
  }
  
  addnews(news:News){
    this.news.push(new News(news.title,news.image,news.body,news.publishDate));
  }
  constructor() { }
}
