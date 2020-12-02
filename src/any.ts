import axios from 'axios';
import { isNamedTupleMember } from 'typescript';

export {};

let url: string = 'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

axios.get(url)
  .then(function (response) {
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[] = [{
      id: 1,
      title: 'Title',
      description: 'oreore'
    }];
    console.log(data);
  })