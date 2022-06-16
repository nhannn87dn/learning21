# Optimizing Performance

- `React Memo`  bỏ qua việc **rendering** khi component đó ko có biến nào thay đổi, và ko sử dụng State.
- `useCallback` dùng cache các function có độ tính toán cao, làm chậm component và  có sử dụng State.
