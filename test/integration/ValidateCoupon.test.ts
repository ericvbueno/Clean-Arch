import ValidateCoupon from "../../src/application/usecase/validate-coupon/ValidateCoupon";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory"

test("Deve validar um cupom de desconto", function () {
    const couponRepository = new CouponRepositoryMemory();
    const validateCoupon = new ValidateCoupon(couponRepository);
    const isValid = validateCoupon.execute("VALE20");
    expect(isValid).toBeTruthy();
})