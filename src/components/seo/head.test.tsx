import { render, waitFor } from '@testing-library/react';

test('適切なページタイトルとメタディスクリプションが設定されていること', async () => {
  const testTitle = 'テストタイトル';
  const testDescription = 'テスト用の内容';

  render(<Head title={title} description={description} />);
  await waitFor(() => expect(document.title).toEqual(testTitle));
  const metaDescription = document.querySelector('meta[name="description"]');
  console.log('meta_d', metaDescription);
  expect(metaDescription?.getAttribute('content')).toEqual(testDescription);
});
