import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Home = defineDocumentType(() => ({
  name: 'Home',
  filePathPattern: 'home.md',
  contentType: 'data',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    hero_image: { type: 'string', required: false },
  },
}));

export const Gallery = defineDocumentType(() => ({
  name: 'Gallery',
  filePathPattern: 'gallery/*.md',
  contentType: 'data',
  fields: {
    title: { type: 'string', required: true },
    image: { type: 'string', required: true },
    description: { type: 'string', required: false },
  },
}));

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: 'services/*.md',
  contentType: 'data',
  fields: {
    title: { type: 'string', required: true },
    price: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
}));

export const Contact = defineDocumentType(() => ({
  name: 'Contact',
  filePathPattern: 'contact.md',
  contentType: 'data',
  fields: {
    address: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: { type: 'string', required: true },
    facebook: { type: 'string', required: false },
    instagram: { type: 'string', required: false },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Home, Gallery, Service, Contact],
}); 