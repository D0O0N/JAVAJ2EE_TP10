package model;

/**
 * Un enregistrement de la table DISCOUNT_CODE
 * @author rbastide
 */
public class DiscountCode {

	private String code;

	private float rate;

	public DiscountCode(String code, float rate) {
		this.code = code;
		this.rate = rate;
	}


	public String getDiscountCode() {
		return code;
	}

	public float getRate() {
		return rate;
	}

}
