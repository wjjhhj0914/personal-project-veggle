import Button from '@/components/common/Button';
import { SearchIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Button>로그인</Button>
      <Button outline>Google로 로그인</Button>
      <Button size="sm">작은 버튼</Button>
      <Button size="lg">large button</Button>
      <Button fullWidth>전체 너비</Button>
      <Button leftIcon={<SearchIcon />}>검색</Button>
    </>
  );
}
