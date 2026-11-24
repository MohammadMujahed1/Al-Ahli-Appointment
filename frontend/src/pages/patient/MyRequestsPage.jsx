import PagePlaceholder from '../../components/PagePlaceholder';

// FR-07: GET /api/v1/appointments/mine
export default function MyRequestsPage() {
  return (
    <PagePlaceholder title="طلباتي" story="US-07">
      <p>رقم الطلب، العيادة، التاريخ المفضل والحالة، الأحدث أولاً.</p>
    </PagePlaceholder>
  );
}
