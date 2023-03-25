import { downloadAndZip } from './zip';

describe('downloadAndZip', () => {
  it('can download one file without exploding', () => {
    const urls = ['https://picsum.photos/200/300'];
    const zipFile = downloadAndZip(urls);
    expect(zipFile).toBeTruthy();
  });
  it('can download two files without exploding', () => {
    const urls = ['https://picsum.photos/200/300', 'https://picsum.photos/200'];
    const zipFile = downloadAndZip(urls);
    expect(zipFile).toBeTruthy();
  });

});
