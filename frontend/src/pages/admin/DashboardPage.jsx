import PagePlaceholder from '../../components/PagePlaceholder';

// FR-10: GET /api/v1/admin/appointments
// FR-11, FR-12: PATCH /api/v1/admin/appointments/:requestNumber/confirm | /reject
export default function DashboardPage() {
  return (
    <PagePlaceholder title="لوحة طلبات المواعيد" story="US-10, US-11, US-12">
      <p>الطلبات المعلقة أولاً، مع التصفية حسب الحالة والعيادة والتاريخ، وتأكيد الطلب بوقت أو رفضه بسبب.</p>
    </PagePlaceholder>
  );
}
