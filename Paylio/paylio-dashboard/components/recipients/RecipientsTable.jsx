import Image from "next/image";
import Link from "next/link";

const RecipientsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name/ Business</th>
          <th scope="col">Last transfer date</th>
          <th scope="col">Last transfer amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-1.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Darlene Robertson</p>
                <p className="mdr">jackson.graham@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">10 Mar 2022</p>
          </td>
          <td>
            <p>$106.58</p>
            <p className="mdr">Received</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-2.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Eleanor Pena</p>
                <p className="mdr">michelle.rivera@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">22 Oct, 2020</p>
          </td>
          <td>
            <p>$396.84</p>
            <p className="mdr">Sent</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-3.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Floyd Miles</p>
                <p className="mdr">michael.mitc@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">24 May, 2020</p>
          </td>
          <td>
            <p>$928.41</p>
            <p className="mdr">Received</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-4.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Theresa Webb</p>
                <p className="mdr">dolores.chambers@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">24 May, 2020</p>
          </td>
          <td>
            <p>$710.68</p>
            <p className="mdr">Sent</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-5.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Esther Howard</p>
                <p className="mdr">jackson.graham@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">21 Sep, 2020</p>
          </td>
          <td>
            <p>$779.58</p>
            <p className="mdr">Received</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-6.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Jane Cooper</p>
                <p className="mdr">debra.holt@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">21 Sep, 2020</p>
          </td>
          <td>
            <p>$473.85</p>
            <p className="mdr">Sent</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-7.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Brooklyn Simmons</p>
                <p className="mdr">nathan.roberts@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">17 Oct, 2020</p>
          </td>
          <td>
            <p>$576.28</p>
            <p className="mdr">Received</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-8.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Darrell Steward</p>
                <p className="mdr">tim.jennings@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">8 Sep, 2020</p>
          </td>
          <td>
            <p>$475.22</p>
            <p className="mdr">Sent</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-9.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Savannah Nguyen</p>
                <p className="mdr">curtis.weaver@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">1 Feb, 2020</p>
          </td>
          <td>
            <p>$351.02</p>
            <p className="mdr">Received</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
        <tr data-bs-toggle="modal" data-bs-target="#cardMod1">
          <th scope="row">
            <div className="info-area">
              <div className="img-area">
                <Image
                  src="/images/table-img-10.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </div>
              <div className="text-area">
                <p>Jane Cooper</p>
                <p className="mdr">debra.holt@example.com</p>
              </div>
            </div>
          </th>
          <td>
            <p>03:00 PM</p>
            <p className="mdr">8 Sep, 2020</p>
          </td>
          <td>
            <p>$473.85</p>
            <p className="mdr">Sent</p>
          </td>
          <td className="btn-item">
            <Link href="#">Send Fund</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RecipientsTable;
