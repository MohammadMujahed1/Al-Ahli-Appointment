import { useParams } from 'react-router-dom';
import PagePlaceholder from '../../components/PagePlaceholder';

// FR-06: GET /api/v1/clinics/:clinicId, then POST /api/v1/appointments
export default function NewRequestPage() {
  const { clinicId } = useParams();
  return (
    <PagePlaceholder title="طلب موعد جديد" story="US-06">
      <p>العيادة رقم {clinicId}: اختيار التاريخ المفضل (من الغد حتى 30 يوماً، في أيام عمل العيادة) وملاحظات اختيارية.</p>
    </PagePlaceholder>
  );
}
