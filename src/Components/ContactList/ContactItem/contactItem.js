import React from "react";

const ContactItem = () => {
    return (
        <tr>
            <td>
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                <a href="#" class="user-link">Mila Kunis</a>
                <span class="user-subhead">Admin</span>
            </td>
            <td>
                2013/08/08
            </td>
            <td class="text-center">
                <span class="label label-default">Inactive</span>
            </td>
            <td>
                <a href="#">mila@kunis.com</a>
            </td>
            <td>
                <a href="#" class="table-link">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" class="table-link">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" class="table-link danger">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </td>
        </tr>
    )
}
export default ContactItem;