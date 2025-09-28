import Wrapper from '@/layouts/Wrapper';
import Home from '@/layouts/homepage';

export const metadata = {
  title: "Jardine Asia Pacific | Property Consultant Jakarta",
  description: "Konsultan properti profesional di Jakarta. Spesialis sewa kantor, properti komersial, dan solusi investasi dengan pengalaman lebih dari 7 tahun."
}


const index = async () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default index;
