import { useParams } from 'react-router-dom';
import PagePlaceholder from '../../components/PagePlaceholder';

// FR-08: GET /api/v1/appointments/:requestNumber
// FR-09: PATCH /api/v1/appointments/:requestNumber/cancel
export default function RequestDetailsPage() {
  const { requestNumber } = useParams();
  return (
    <PagePlaceholder title={`الطلب ${requestNumber}`} story="US-08, US-09">
      <p>الحالة، وقت الموعد وملاحظة الموظف عند التأكيد، أو سبب الرفض، وزر الإلغاء عند السماح.</p>
    </PagePlaceholder>
  );
}
